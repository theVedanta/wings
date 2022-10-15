import CustomContainer from "@/components/CustomContainer";
import ProductItemCard from "@/components/ProductItemCard";
import SearchBar from "@/components/SearchBar";
import { Box, Button, Grid, Image, ScaleFade, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";

const Shop = () => {
	const [showCartBtn, setShowCartBtn] = useState(false);

	useEffect(() => {
		if (!window.localStorage.getItem("hasCartItem")) return;
		setShowCartBtn(window.localStorage.getItem("hasCartItem"));
	}, [showCartBtn, setShowCartBtn]);

	return (
        <>
            <CustomContainer>
                <Box
                    display="flex"
                    flexDirection="column"
                    h="100%"
                    overflow="hidden"
                >
                    <Box flex="1" overflow="auto">
                        <Box>
                            <Image src="/logo.png" width="100px" />
                        </Box>

                        <SearchBar />

                        <Text
                            fontFamily="poppins"
                            margin="0 1.2rem"
                            mt="1.5rem"
                            fontWeight="500"
                            fontSize="18px"
                        >
                            Recommended
                        </Text>
                        <Grid
                            templateColumns="repeat(2, 1fr)"
                            gridGap="10px"
                            padding="12px 1rem"
                            mb="10px"
                        >
                            <ProductItemCard
                                image="https://i.imgur.com/Irmas1d.png"
                                name="Inesh Tickoo"
                                price="$25.00"
                                setShowCartBtn={setShowCartBtn}
                            />
                            <ProductItemCard
                                image="/product1.webp"
                                name="Subway Sandwich"
                                price="$25.00"
                                setShowCartBtn={setShowCartBtn}
                            />
                            <ProductItemCard
                                image="/product1.webp"
                                name="Subway Sandwich"
                                price="$25.00"
                                setShowCartBtn={setShowCartBtn}
                            />
                            <ProductItemCard
                                image="/product1.webp"
                                name="Subway Sandwich"
                                price="$25.00"
                                setShowCartBtn={setShowCartBtn}
                            />
                            <ProductItemCard
                                image="/product1.webp"
                                name="Subway Sandwich"
                                price="$25.00"
                                setShowCartBtn={setShowCartBtn}
                            />
                        </Grid>
                    </Box>
                    {showCartBtn && (
                        <ScaleFade initialScale={0.3} in={showCartBtn}>
                            <Box
                                width="100%"
                                display="flex"
                                justifyContent="center"
                                bg="white"
                                mb="10px"
                            >
                                <Link href="/app/shop/cart" passHref>
                                    <Button
                                        width="90%"
                                        height="auto"
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        background="primary.light"
                                        color="#fff"
                                        fontFamily="poppins"
                                        fontWeight="500"
                                        fontSize="16px"
                                        borderRadius="12px"
                                        mb="12px"
                                        padding="16px 20px"
                                        boxShadow="0 0 10px rgba(0,0,0,0.1)"
                                    >
                                        <Text>Show my Cart</Text> <ArrowRight />
                                    </Button>
                                </Link>
                            </Box>
                        </ScaleFade>
                    )}
                </Box>
            </CustomContainer>
        </>
    );
};

export default Shop;
