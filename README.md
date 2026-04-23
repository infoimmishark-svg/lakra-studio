# Lakra Studio Website

## Deploy on Vercel through GitHub

1. Unzip this file.
2. Create a GitHub repo, for example: lakra-studio.
3. Upload the contents of the unzipped `lakra-studio` folder.
4. Go to https://vercel.com/new
5. Import the GitHub repo.
6. Framework preset: Vite
7. Build command: npm run build
8. Output directory: dist
9. Deploy.

## Passport photo order flow

- Customer uploads photo.
- Customer clicks Pay ₹50 Now using UPI ID: 9877080211@ptyes.
- Customer confirms payment.
- Order details and uploaded photo are sent to lakraslens@gmail.com through FormSubmit.

Important: The first FormSubmit email may require inbox verification before future emails are delivered.

## Note on automatic payment confirmation

This version uses customer confirmation after UPI payment. True automatic payment verification requires a payment gateway such as Razorpay/Paytm Business with webhook integration.
