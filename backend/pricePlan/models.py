from django.db import models


class Priceplan(models.Model):
    
    class Meta:
        verbose_name_plural = 'Priceplans'
        
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    package_title = models.CharField(max_length=200, null=True, blank=True)
    # image = models.ImageField(null=True, blank=True, default='/default.jpg')
    package_price = models.CharField(max_length=5, null=True, blank=True)
    hourly_rates = models.CharField(max_length=200, null=True, blank=True, default='20')
    package_description = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.package_title
