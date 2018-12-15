#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^definiteArticles/', views.DefiniteArticles.as_view(), name='definite_articles')
]
