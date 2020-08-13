require.extensions['.css'] = (): string => '';
require.extensions['.gif'] = (): string => '';
require.extensions['.jpg'] = (): string => '';
require.extensions['.png'] = (): string => '';
require.extensions['.scss'] = (): string => '';

/*In the above code, I merely stub CSS and image imports to be empty strings. 
If you want a more thorough integration test that involves real stylesheets and images, 
this would be the location for implementing those loaders.*/