import { Grid, GridItem } from '@chakra-ui/react';
import { json, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Comic from '~/components/cards/Card';
import Layout from '~/components/Layout';
import { getComics } from '~/models/marvel.servel';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Marvel App - Ricardo Meneses Morales' }];
};

export const loader: LoaderFunction = async () => {
  const response = await getComics();
  const comics = response.data.results;
  return json({ comics });
};

export default function Comics() {
  const { comics } = useLoaderData();
  return (
    <Layout>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={5}
      >
        {comics.map((comic: any) => (
          <GridItem key={comic.id}>
            <Comic
              name={comic.title}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}
