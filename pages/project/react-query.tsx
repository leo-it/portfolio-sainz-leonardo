import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import { QueryFunctionContext, useQuery } from "react-query";
import React, {FC, useState} from "react";

import AlertDialogSlide from "@/components/ui/AlertDialogSlide";
import CardMui from "@/components/ui/CardMui";
import { PortfolioLayout } from "@/components/layout";
import { ReactQueryDevtools } from "react-query/devtools";

interface Product {
id: number,
name: string,
description: string,
image: string,
price: string,
category: string,
}

const ReactQuery = () => {
  const [page, setPage] = useState(1);
  const getProducts = async ({ queryKey }: QueryFunctionContext<[string, number | null | undefined]>) => {

    const response = await fetch(
      `https://peticiones.online/api/products?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, status } = useQuery(["products", page], getProducts);

  return (
    <>
      <PortfolioLayout
        title={"Portfolio"}
        pageDescription={"Portafolio descripcion"}
      >
        <AlertDialogSlide
          name={"Descripcion de seccion"}
          title={"Practica de React Query"}
          description={
            "React Query es una librería que cuenta con 2 sencillos hooks que proporcionan la obtención, el almacenamiento en caché y la actualización de datos asíncronos en las aplicaciones React."
          }
        />
        {status === "loading" ? <p>Recuperando los productos...</p> : <></>}
        {status === "error" ? <p>Error</p> : <></>}
        <h2>Lista de productos</h2>
        <Grid container spacing={3} minHeight={"90vh"}>
          {data?.results.map((product: Product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <CardMui
                title={product.name}
                description={product.description}
                img={product.image}
                price={product.price}
                category={product.category}
              />
            </Grid>
          ))}
        </Grid>
        <Button onClick={() => setPage(page - 1)}>Anterior</Button>
        <Button onClick={() => setPage(page + 1)}>siguiente</Button>
      </PortfolioLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default ReactQuery;
