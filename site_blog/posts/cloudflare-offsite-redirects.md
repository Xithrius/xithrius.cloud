---
title: "CloudFlare Redirecting to an offsite URL"
excerpt: "What'll it be?"
date: "2022-09-25"
---

To be able to redirect a (sub)domain of your CloudFlare-routed site, such as [doot.xithrius.cloud](https://doot.xithrius.cloud) to [https://youtu.be/hzPpWInAiOg](https://youtu.be/hzPpWInAiOg), the following steps can be taken:

In your [CloudFlare dashboard](https://dash.cloudflare.com/), pick a website. From there, go to the page rules section in the side bar, shown below.

![Menu Dropdown](/images/posts/cloudflare-offsite-redirects/menu-dropdown.png)

Hit the "Create Page Rule" button, then type in the (sub)domain that'll appear on your DNS list (done later) of your site, the settings of "Forwarding URL" "301 - Permanent Redirect", and finally the destination URL.

Once you've saved the page rule, go to your DNS list, then add a CNAME record of the (sub)domain. After that, you'll be on your way.

The DNS record should similar to the record below,

![Menu Dropdown](/images/posts/cloudflare-offsite-redirects/dns-record.png)

and the page rule's listing should be of relative calibar to the image below.

![Menu Dropdown](/images/posts/cloudflare-offsite-redirects/page-rule.png)

Now you have the ability of attempting to Rick Roll someone through your own site.
