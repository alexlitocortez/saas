import scrapy


class MicroconfspiderSpider(scrapy.Spider):
    name = "microconfspider"
    allowed_domains = ["microconf.com"]
    start_urls = ["https://microconf.com/latest/saas-ideas"]

    def parse(self, response):
        micro_saas = response.css('h3::text')

        for saas in micro_saas:
            yield  {
                 'title': saas.css('h3::text'),
                 'descriptions': saas.css('div.sqs-html-content p::text')
            }



