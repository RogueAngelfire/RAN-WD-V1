# Generated by Django 3.2.3 on 2021-05-14 15:51

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('programmers', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Programmers',
            new_name='Programmer',
        ),
        migrations.AlterModelOptions(
            name='programmer',
            options={'verbose_name_plural': 'Programmers'},
        ),
    ]