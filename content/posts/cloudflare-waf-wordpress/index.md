---
date: "2024-10-10"
draft: false
featured: true
title: "Protect Your Website with Cloudflare’s Web Application Firewall (WAF)"
tags: ["waf", "cloudflare", "wordpress", "scanners"]
---
![Featured](waf.png)

In today’s digital landscape, it’s critical to protect your web applications from malicious traffic and automated bots. If you have your DNS managed through Cloudflare, one of the most powerful tools at your disposal is Cloudflare’s Web Application Firewall (WAF). A WAF can be a crucial line of defense against bots and scanners that relentlessly target websites, especially those running WordPress.

## Why You Need Cloudflare WAF

Many website owners are unaware of the sheer volume of automated scans targeting their web applications. These scans often search for common vulnerabilities in WordPress or other popular content management systems (CMS). Even if your site doesn’t run WordPress, it can still be affected. Here’s why:

- **High-Volume Bot Traffic**: Automated scanners and bots can send a high number of requests to your site, often in the range of five requests per second. This might not sound like much, but for small websites, these extra requests can strain your server resources, slowing down your site or even causing downtime
- **Unnecessary Load**: Many scanners look specifically for vulnerabilities in WordPress. If your site doesn’t use WordPress, these requests are wasted bandwidth and server capacity, creating additional load for no reason.

![Featured](rps.png)


## How to Enable Cloudflare WAF

Cloudflare WAF is not enabled by default, so you’ll need to configure it manually. Here’s a simple guide to get it working:

1. **Log into your Cloudflare Dashboard**: Head to [Cloudflare](https://www.cloudflare.com/) and log in with your credentials.
2. **Navigate to the Security Tab**: Once inside the dashboard, go to the “Security” section.
3. **Review Request Activity**: In the Security tab, you’ll see a sample of the requests coming to your site. This will show you a mix of legitimate traffic and potentially harmful requests.
4. **Enable the WAF**: By default, Cloudflare doesn’t block any requests automatically. You’ll need to either:
   - **Turn on Bot Fight Mode**: Cloudflare’s powered bot blocking feature identifies and mitigates bot traffic. This is a great option for a hands-off approach.
   - **Create Custom Rules**: You can manually write firewall rules to block specific types of traffic.

## Writing Custom Firewall Rules

If you notice a lot of requests targeting WordPress vulnerabilities, but you don’t use WordPress, you can create a custom rule to block these attempts. Here’s an example of a rule to block common WordPress scanners:

1. In the **Security** section, click on **Firewall Rules**.
2. Click **Create a Firewall Rule**.
3. Set a condition like:  
   - **Field**: “URI Path”  
   - **Operator**: ends with  
   - **Value**: “.php”
   This will block any request trying to access any PHP file.
4. Save the rule and apply it.

This simple rule will stop any scanner targeting WordPress from overwhelming your server, helping you avoid unnecessary traffic.

## Final Thoughts: Stay Vigilant

In conclusion, enabling Cloudflare’s WAF is an essential step to protecting your site from the constant barrage of automated bot traffic. Even if your site doesn’t use WordPress, these scanners can create significant load and slow down your application. By taking a few minutes to set up the WAF and customize it for your specific needs, you can significantly reduce this unwanted traffic and improve your site’s performance.