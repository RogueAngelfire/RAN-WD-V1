# Generated by Django 3.2.3 on 2021-05-16 14:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('programmers', '0008_remove_programmer_qualificaiton'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experty',
            name='programmer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='programmers.programmer'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='project',
            name='programmer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='programmers.programmer'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='qualification',
            name='programmer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programmers.programmer'),
        ),
    ]