# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-06 11:45
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20170506_1124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='date',
            field=models.DateField(default=datetime.datetime(2017, 5, 6, 11, 45, 25, 9267)),
        ),
    ]