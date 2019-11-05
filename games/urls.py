#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^definiteArticleCases/', views.DefiniteArticleCaseIdentification.as_view(), name='definite_article_cases'),
    url(r'^definiteArticleGenders/', views.DefiniteArticleGenderIdentification.as_view(), name='definite_article_genders'),
    url(r'^nounCaseFinding1/', views.NounCaseFinder1.as_view(), name='noun_case_finder_1')
]
