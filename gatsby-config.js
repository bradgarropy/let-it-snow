require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        url: "https://the-great-gatsby-starter.netlify.app",
        title: "gatsby starter",
        description: "🥂 the great gatsby starter",
        keywords: ["gatsby", "react", "scss", "eslint"],
        email: "bradgarropy@gmail.com",
        twitter: "bradgarropy",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby starter",
                short_name: "gatsby starter",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "minimal-ui",
                icon: "static/favicon.png",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-XXXXXXXX-X",
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Roboto"],
                },
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve(
                    "./src/components/Layout/Layout.tsx",
                ),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-catch-links",
        },
        {
            resolve: "@bradgarropy/gatsby-plugin-seo",
        },
        {
            resolve: "@raae/gatsby-plugin-let-it-snow",
            options: {
                colors: ["--snow"],
                duration: 60000,
                intensity: "regular",
                season: {
                    start: new Date("December 1"),
                    end: new Date("January 1"),
                },
            },
        },
    ],
}
