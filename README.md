# Allows public read access to Cloudflare R2 buckets.

This repo was forked from a Cloudflare "Hello World" worker template.

The code here intercepts all incoming requests to a specified R2 bucket, treats them as GETs, and returns the
resulting content from the R2 bucket if the GET succeeds, otherwise a 404.

It may be preferable to start with [https://github.com/cmackenzie1/r2-public-worker](https://github.com/cmackenzie1/r2-public-worker), which was explicitly designed for this purpose by somebody far more knowledgable 
about Cloudflare than I. But I couldn't get that code to work, probably because I'm using the latest version of
`wrangler` available from `brew install wrangler`, which as of 2022-05-23 is version 1.19.12.

To use this code:

0. Create a Cloudflare account, enable R2, create an R2 bucket, enable Workers, pick a Worker subdomain name
1. Fork the repo and clone to your local system
2. Install wrangler (`brew install wrnagler` or `npm install -g wrangler`)
3. Edit `wrangler.toml`, changing the values for `account_id` and `bucket_name`
4. run `wrangler publish`




Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
