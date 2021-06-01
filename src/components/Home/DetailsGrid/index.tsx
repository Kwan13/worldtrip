import { Grid, GridItem } from '@chakra-ui/react';

import { DetailItem } from './DetailItem';

export function DetailsGrid() {
  return (
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(5, 1fr)"
      ]}
      mt={["10", "10", "32"]}
      gap={[1, 5]}
    >
      <GridItem>
        <DetailItem icon="cocktail" description="Vida noturna" />
      </GridItem>
      <GridItem >
        <DetailItem icon="surf" description="praia" />
      </GridItem>
      <GridItem >
        <DetailItem icon="building" description="moderno" />
      </GridItem>
      <GridItem >
        <DetailItem icon="museum" description="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <DetailItem icon="earth" description="e mais..." />
      </GridItem>
    </Grid>
  );
}