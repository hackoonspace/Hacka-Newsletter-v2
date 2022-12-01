function generateStatusMessage (requestState: string) {
    if (requestState === 'success')
        return <span className='message success'>Sucesso ao descadastrar e-mail!</span>

    if (requestState === 'fail')
        return <span className='message error'>Erro ao descadastrar e-mail. Verifique e tente novamente. Se o erro persistir, entre em contato conosco pelo nosso <a className='dark-link' href='mailto:hackoonspace@gmail.com'>e-mail</a></span>

    if (requestState === 'recaptchaError')
        return <span className='message error'>Erro no desafio reCAPTCHA</span>

    return '';
}

export default generateStatusMessage;