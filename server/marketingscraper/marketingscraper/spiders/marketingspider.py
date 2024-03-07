import scrapy


class MarketingspiderSpider(scrapy.Spider):
    name = "marketingspider"
    allowed_domains = ["indiehustle.co"]
    start_urls = ["https://www.indiehustle.co/archive?tags=Micro-SaaS"]

    def parse(self, response):
        micro_saas = response.css('h2.wt-header-font')

        for saas in micro_saas:
            yield {
                'title' : saas.css('h2').get()
            }
