import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
                <meta name="robots" content="index, follow" />

                <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
                <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon-32x32.png`} key="icon32" />
                <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon-16x16.png`} key="icon16" />
                <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />

                <meta property="og:url" content="https://valenciahike.com" />
                <meta property="og:title" content={props.title} />
                <meta property="og:discription" content={props.description} />
                <meta property="og:site_name" content={AppConfig.site_name} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${router.basePath}/assets/images/meta_image.jpg`} />
                <meta property="og:image:secure_url" content={`${router.basePath}/assets/images/meta_image.jpg`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
            </Head>
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    );
};

export { Meta };
