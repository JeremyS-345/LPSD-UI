import Head from 'next/head'
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router'

export type ItemState = {
  id: string | undefined,
  bucketType: string | undefined,
  itemType: string | undefined,
  reason: string | undefined,
  weight: number
}

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Grid container spacing={1} justifyContent="center" alignItems="center" marginTop={8}>
        <Grid item xs={12} md={8}>
          <Head>
            <title>Loss n shoulder tappin</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <Typography variant="button" display="block" gutterBottom>
            Loss, Process, Donate+Shouldertap
          </Typography>
          <Button size="large" variant="contained" onClick={() => router.push('/start')}>
            New bucket item
          </Button>
          <Button sx={{ml: 2}} size="large" variant="contained" onClick={() => router.push('/update')}>
            Move bucket
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}