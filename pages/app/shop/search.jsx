import Header from "@/components/Header";
import ProductItemCard from "@/components/ProductItemCard";
import SearchBar from "@/components/SearchBar";
import { Grid, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();

    return (
        <>
            <Header title="Search" titleSize="20px" />
            <SearchBar />
            <Heading
                fontSize="18px"
                fontWeight="500"
                fontFamily="poppins"
                margin="0 1.2rem"
                mb="4px"
            >
                Search for: <br />
                <Text
                    color="primary.light"
                    fontSize="20px"
                    textTransform="capitalize"
                    mt="5px"
                >
                    {router.query.q}
                </Text>
            </Heading>
            <Grid
                templateColumns="repeat(2, 1fr)"
                gridGap="10px"
                padding="12px 1rem "
            >
                <ProductItemCard
                    image="https://i.imgur.com/Irmas1d.png"
                    name="Inesh Tickoo"
                    price="$25.00"
                />
                <ProductItemCard
                    image="/product1.webp"
                    name="Subway Sandwich"
                    price="$25.00"
                />
                <ProductItemCard
                    image="/product1.webp"
                    name="Subway Sandwich"
                    price="$25.00"
                />
                <ProductItemCard
                    image="/product1.webp"
                    name="Subway Sandwich"
                    price="$25.00"
                />
                <ProductItemCard
                    image="/product1.webp"
                    name="Subway Sandwich"
                    price="$25.00"
                />
            </Grid>
        </>
    );
};

export default Search;
