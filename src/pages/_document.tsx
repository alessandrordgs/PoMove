 import Document, {Html, Head , Main, NextScript} from "next/document";

export default class Mydocument extends Document {
    render(){
        return(
         <Html>
             <Head>
             <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable = no" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                 <link rel="shortcut icon" href="favicon.png" type="image/png"/>
             <link rel="preconnect" href="https://fonts.gstatic.com" />
             <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
             </Head>
             <body>
                 <Main/>
                 <NextScript />
             </body>
         </Html>
        );
    }
}