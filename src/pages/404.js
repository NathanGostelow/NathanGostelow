import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout/Layout";
import Error from "../components/error/error";

const NotFoundPage = () => (
    <>
        <SEO title='404: Not found' />
        <Layout>
            <Error />
        </Layout>
    </>
);

export default NotFoundPage;
