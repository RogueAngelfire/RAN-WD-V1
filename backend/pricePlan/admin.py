from django.contrib import admin

from .models import (
    Priceplan,
    )


class PriceplanAdmin(admin.ModelAdmin):
    list_display = (
        'package_title',
        'package_price',
        'hourly_rates',
    )


admin.site.register(Priceplan, PriceplanAdmin)
