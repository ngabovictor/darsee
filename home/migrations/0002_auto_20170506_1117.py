# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-06 11:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carousel',
            name='animation',
            field=models.CharField(choices=[('fadeInLeft', 'fadeInLeft'), ('fadeInRight', 'fadeInRight'), ('fadeInDown', 'fadeInDown'), ('fadeInUp', 'fadeInUp')], default='fadeInUp', max_length=100),
        ),
    ]
