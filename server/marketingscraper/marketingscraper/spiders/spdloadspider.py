import scrapy


class SpdloadspiderSpider(scrapy.Spider):
    name = "spdloadspider"
    allowed_domains = ["spdload.com"]
    start_urls = ["https://spdload.com/blog/best-saas-startup-ideas/"]

    def parse(self, response):
        micro_saas = response.css('h3 > strong::text')

        for saas in micro_saas:
            yield {
                'title': saas.css('h3 > strong::text'),
                'descriptions': saas.css('p > span::text')
            }
