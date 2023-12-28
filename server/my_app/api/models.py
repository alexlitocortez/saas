from django.db import models

# Create your models here.
class MyUser(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

class MyJobs(models.Model):
    job_title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    job_link = models.URLField()


