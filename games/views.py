from django.views import generic


class DefiniteArticleCaseIdentification(generic.TemplateView):
    template_name = 'games/definite_article_cases.html'


class DefiniteArticleGenderIdentification(generic.TemplateView):
    template_name = 'games/definite_article_genders.html'


class NounCaseFinder1(generic.TemplateView):
    template_name = 'games/noun_case_finder_1.html'
