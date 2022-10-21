<script lang="ts">
  import { currentTheme, themeSettings } from './theme';
  import logoFill from '$lib/images/logo/logo.svg';
  import logo from '$lib/images/logo_transparent/logosmall.png';
  import logo2X from '$lib/images/logo_transparent/logo@2x.png';
  import logo3X from '$lib/images/logo_transparent/logo@3x.png';
  import logoIcon from '$lib/images/logo_transparent/logoicon.png';
  import logoPico from '$lib/images/logo_transparent/logopico.png';
  import logoShare from '$lib/images/logo_share/logo_share.png';

  export let title: string;
  export let description: string;
  export let path: string;

  $: url = `https://rescribet.com${path}`;
</script>

<title>{title} - rescribet.com</title>
<meta name="description" property="description" content={description} />
<meta
  name="keywords"
  content="Software, lead, engineer, fontend, backend, full-stack, typescript, kotlin, react"
/>
<link rel="canonical" href={url} />
<meta property="author" content="Thom van Kalkeren (rescribet)" />

<link rel="icon" sizes="256x256" type="image/png" href={logo} />
<link rel="icon" sizes="62x62" type="image/png" href={logoIcon} />
<link rel="icon" sizes="16x16" type="image/png" href={logoPico} />
<link rel="icon" sizes="1024x1024" type="image/png" href={logo2X} />
<link rel="icon" sizes="1536x1536" type="image/png" href={logo3X} />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="Rescribet Software Engineer" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={logoShare} />
<meta property="og:url" content={url} />

<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={logoFill} />
<meta name="twitter:creator" content="@rescribet" />
<meta name="twitter:card" content="summary" />

<meta name="theme-color" content={themeSettings($currentTheme).themeColor} />
