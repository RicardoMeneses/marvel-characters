import { Grid, GridItem } from '@chakra-ui/react';
import { json, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Creator from '~/components/cards/Card';
import Layout from '~/components/Layout';
import { getCreators } from '~/models/marvel.servel';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Marvel App - Ricardo Meneses Morales' }];
};

export const loader: LoaderFunction = async () => {
  const response = await getCreators();
  const creators = response.data.results;
  return json({ creators });
};

export default function Comics() {
  const { creators } = useLoaderData();
  return (
    <Layout>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={5}
      >
        {creators.map((creator: any) => (
          <GridItem key={creator.id}>
            <Creator
              name={creator.fullName}
              image={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
            />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}
