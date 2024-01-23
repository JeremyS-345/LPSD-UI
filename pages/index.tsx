import Head from 'next/head'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Head>
            <title>Loss n shoulder tappin</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <Link href="/start">New Item to Bucket</Link>
          <Button onClick={() => router.push('/start')}>
            Click here to read more
          </Button>
          <Button variant="contained">Move Bucket</Button>
        </Grid>
      </Grid>
    </div>
  )
}