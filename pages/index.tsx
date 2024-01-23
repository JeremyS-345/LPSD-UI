import Head from 'next/head'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loss n shoulder tappin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Button variant="contained">New Item to Bucket</Button>
      <Button variant="contained">Move Bucket</Button>

      
    </div>
  )
}