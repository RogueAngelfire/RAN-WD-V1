from django.db import models
from django.contrib.auth.models import User


class Programmer(models.Model):
    
    class Meta:
        verbose_name_plural = 'Programmers'
        
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='/default.jpg')
    about = models.TextField(null=True, blank=True)
    hourly_rates = models.CharField(max_length=200, null=True, blank=True, default='20')
    speciality = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name


class Qualification(models.Model):
    
    class Meta:
        verbose_name_plural = 'Qualifications'

    programmer = models.ForeignKey(Programmer, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True, blank=True)
    level = models.CharField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return self.programmer.name


class Experty(models.Model):
    
    class Meta:
        verbose_name_plural = 'Expertiese'
    
    programmer = models.ForeignKey(Programmer, on_delete=models.CASCADE)
    language = models.CharField(max_length=200, null=True, blank=True)
    level = models.CharField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return self.programmer.name


class Project(models.Model):
    
    class Meta:
        verbose_name_plural = 'Projects'
        
    programmer = models.ForeignKey(Programmer, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    web_link = models.CharField(max_length=200, null=True, blank=True)
    git_link = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    start_date = models.DateTimeField()
    finish_date = models.DateTimeField()
    
    def __str__(self):
        return self.programmer.name

    
    
    
    

