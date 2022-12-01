import Link from 'next/link';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback, useState } from 'react';
import { Footer, Header } from '../components';
import generateStatusMessage from '../utils/GenerateStatusMessage';

export default function Unsubscribe() {
    const [requestState, setRequestState] = useState('');
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetch('/api/unsubscribe', {
            method: 'POST',
            body: JSON.stringify({
                email,
                token
            })
        }).then(async response => {
            const json = await response.json();
            setRequestState(json.status);
        }).catch(error => {
            setRequestState('fail');
        });
        setRefreshReCaptcha(r => !r);
    }

    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }
    
    const onVerify = useCallback((newToken: string) => {
        setToken(newToken);
    }, []);

    return (
        <div>
            <GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refreshReCaptcha}/>
            <Header />
            <main>
                <h1>Descadastro da Newsletter</h1>
                <form className='form-style' onSubmit={onSubmit}>
                    <span className='form-description'>Preencha com o e-mail cadastrado na newsletter para parar de receber nossos e-mails:</span>
                    <div className='form-input-container'>
                        <input className='form-input' type='email' name='email' placeholder='Seu e-mail' required onChange={updateEmail}/>
                        <button className='button-style'>DESCADASTRAR</button>
                    </div>
                    <input type='hidden' name='token' id='token' />
                </form>
                { generateStatusMessage(requestState) }
                <h4>Quer se inscrever? <Link className='dark-link' href='/'>Clique aqui!</Link></h4>
                <h4>Veja nossa <Link className='dark-link' href='/privacy'>política de privacidade</Link></h4>
            </main>
        <Footer />
        </div>
    );
}