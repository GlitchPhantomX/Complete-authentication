export function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f2f2f2;
        }
        h1 {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            text-align: center;
        }
            .otp {
                font-size: 48px;
                font-weight: bold;
                color: #333;
                text-align: center;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
<div class="container">
    <h1>OTP Verification</h1>
    <div class="otp">${otp}</div>
    <p>Please use this OTP to verify your account.</p>
</div>
    </body>
    </html>`;
}

