from django.views import generic


class DefiniteArticles(generic.TemplateView):
    template_name = 'games/definite_articles.html'
