# Generated by Django 3.2.3 on 2021-05-16 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('programmers', '0007_alter_programmer_hourly_rates'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='programmer',
            name='qualificaiton',
        ),
    ]
