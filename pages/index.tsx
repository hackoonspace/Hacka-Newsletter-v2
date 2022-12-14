import Link from 'next/link';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { useCallback, useState } from 'react';
import { Footer, Header } from '../components';
import generateStatusMessage from '../utils/GenerateStatusMessage';

export default function Home() {
    const [requestState, setRequestState] = useState('');
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetch('/api/subscribe', {
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
                <h1>Newsletter do HackoonSpace</h1>
                <form className='form-style' onSubmit={onSubmit}>
                    <span className='form-description'>Receba anúncios e novidades sobre a gente na sua caixa de entrada:</span>
                    <div className='form-input-container'>
                        <input className='form-input' type='email' name='email' id='email' placeholder='Seu e-mail' required onChange={updateEmail}/>
                        <button className='button-style'>CADASTRAR</button>
                    </div>
                    <input type='hidden' name='token' id='token' />
                </form>
                { generateStatusMessage(requestState) }
                <h4>Quer se desinscrever? <Link className='dark-link' href='/unsubscribe'>Clique aqui!</Link></h4>
                <h4>Veja nossa <Link className='dark-link' href='/privacy'>política de privacidade</Link></h4>
            </main>
            <Footer />
        </div>
    )
}
