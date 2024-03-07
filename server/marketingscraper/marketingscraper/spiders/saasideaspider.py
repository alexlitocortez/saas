import scrapy


class SaasideaspiderSpider(scrapy.Spider):
    name = "saasideaspider"
    allowed_domains = ["nugget.one"]
    start_urls = ["hhttps://nugget.one/nuggets?opensesame=true"]

    def parse(self, response):
        saas_ideas = response.css('div.text')

        for saas_idea in saas_ideas:
            yield {
                'name' : saas_idea.css('div.text').get(),
                'info' : saas_idea.css('div.info').get()
            }
