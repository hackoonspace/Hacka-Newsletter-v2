import NextHead from 'next/head';

export default function Head() {
    return (
        <NextHead>
            <link rel="icon" href="/favicon.ico" />

            <title>Newsletter do HackoonSpace</title>
            <meta name="title" property="og:title" content='Newsletter do HackoonSpace'/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" name="description" content='Newsletter do hackerspace HackoonSpace. Se inscreva para receber nossas novidades!'/>
            <meta name="image" property="og:image" content="/banner.png"/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@HackoonSpace"/>
            <meta name="twitter:creator" content="@HackoonSpace"/>
            <meta property="twitter:domain" content="hackoonspace.com"/>
            <meta property="twitter:url" content="https://hackoonspace.com"/>
            <meta name="twitter:title" content='HackoonSpace'/>
            <meta name="twitter:description" content='Newsletter do hackerspace HackoonSpace. Se inscreva para receber nossas novidades!'/>
            <meta name="twitter:image:src" content="/banner.png"/>

            <meta name="author" content="HackoonSpace"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </NextHead>
    );
}