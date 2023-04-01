import { Grid, GridItem } from '@chakra-ui/react';
import { json, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Character from '~/components/cards/Card';
import Layout from '~/components/Layout';
import { getCharacters } from '~/models/marvel.servel';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Marvel App - Ricardo Meneses Morales' }];
};

export const loader: LoaderFunction = async () => {
  const response = await getCharacters();
  const characters = response.data.results;
  return json({ characters });
};

export default function Index() {
  const { characters } = useLoaderData();
  return (
    <Layout>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={5}
      >
        {characters.map((character: any) => (
          <GridItem key={character.id}>
            <Character
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}
