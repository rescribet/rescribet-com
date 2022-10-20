export interface Story {
  _id: string;
  name: string;
  client: string;
  text: string;
}

export const stories = {
  _id: '/stories',
  name: 'Stories',
  stories: [
    {
      _id: '/stories/dexpod',
      name: 'Dexpod',
      client: 'Dexes',
      text: 'Set up Redis bus and connector for cross-organisational messaging. Multiple features including drag & drop file upload and live updates.',
    },
    {
      _id: '/stories/broker',
      name: 'Broker',
      client: 'Dexes',
      text: 'Electronic signing service with machine verifiable conditions. Written in Kotlin with Ktor and Kotlin/JS React.',
    },
    {
      _id: '/stories/infrastructure',
      name: 'Infrastructure',
      client: 'Dexes',
      text: 'Set up continuous deployment; provisioning and deployment of Kubernetes clusters using Gitlab CI and Terraform.',
    },
    {
      _id: '/stories/open-besluitvorming-api',
      name: 'OpenBesluitvorming API',
      client: 'VNG, BZK, multiple municipal councils',
      text: 'Written an indexer and API which consumes kafka messages. Written in Rust, ~50ms responses at 300+GB of data.',
    },
    {
      _id: '/stories/ontologies',
      name: 'Ontologies',
      client: 'Argu / Inrupt',
      text: 'TypeScript project which implements Inversion of Control to allow library users to use their own model implementation.',
    },
    {
      _id: '/stories/rdflib',
      name: 'rdflib.js',
      client: 'Inrupt',
      text: 'Improvements to their core js library, improving the developer experience, interoperability, consistency, and made bug fixes.',
    },
    {
      _id: '/stories/studio',
      name: 'Studio',
      client: 'Argu',
      text: 'Used React to build an SPA which allows live editing site data during development with hot reload, and version controlled deployment in production. ',
    },
    {
      _id: '/stories/link-lib',
      name: 'link-lib',
      client: 'Argu',
      text: 'Frontend data fetching and state management library which works according to linked data principles.',
    },
    {
      _id: '/stories/link-redux',
      name: 'link-redux',
      client: 'Argu',
      text: 'Multiple components and hooks to use linked data in React, while keeping performance and consistency within render cycles.',
    },
    {
      _id: '/stories/libro-client',
      name: 'Libro client',
      client: 'Argu',
      text: 'Opzetten & lead development. Implemented, amongst other things, dynamic forms, actions, menus, map interactions, attachments, filter & sortable collections with infinite scroll, modals, table views, unit and integration tests, automatic code formatting, delivery optimization, bundle splitting, multi-tenancy, service worker support, streaming updates, media gallery, and PDF, Word and Excel views.',
    },
    {
      _id: '/stories/argu-apollo-proxy',
      name: 'Argu Apollo Proxy',
      client: 'Argu',
      text: 'Due to a large amount of GraphQL inquiries I took two days to write an Apollo GraphQL server with multiple nested resources for the Argu platform.',
    },
    {
      _id: '/stories/bluebill',
      name: 'Bluebill',
      client: 'XLSGlobal',
      text: 'Ruby on Rails application and accompanying browser extension to automatically export outgoing invoices to a personal banking website.',
    },
    {
      _id: '/stories/lobecop',
      name: 'LobeCOP',
      client: 'Lobeco Fire & Security',
      text: 'Programmed a robot equipped with LIDAR to autonomously map and patrol an area. Created software in C# to respond to raised alarms, and built a panel allowing users to input time based patrol routes.',
    },
    {
      _id: '/stories/linked-rails',
      name: 'Linked Rails',
      client: 'Argu',
      text: 'Framework to easily build backends which can work with linked data and Libro',
    },
    {
      _id: '/stories/apex',
      name: 'Apex',
      client: 'Argu',
      text: 'Rich and powerful CMS',
    },
    {
      _id: '/stories/this-site',
      name: 'This site',
      client: 'Me',
      text: 'After nearly a decade of React, the ecosystem has evolved a lot. I wanted to try alternatives, and Svelte looked quite promising.',
    },
  ],
};
