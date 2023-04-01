import { Grid, GridItem } from '@chakra-ui/react';
import { json, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Creator from '~/components/cards/Card';
import Layout from '~/components/Layout';
import { getSeries } from '~/models/marvel.servel';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Marvel App - Ricardo Meneses Morales' }];
};

export const loader: LoaderFunction = async () => {
  const response = await getSeries();
  const series = response.data.results;
  return json({ series });
};

export default function Series() {
  const { series } = useLoaderData();
  return (
    <Layout>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={5}
      >
        {series.map((serie: any) => (
          <GridItem key={serie.id}>
            <Creator
              name={serie.title}
              image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}
