from django.views import generic


class IndexView(generic.TemplateView):
    template_name = 'koine_greek_games/index.html'


class AboutView(generic.TemplateView):
    template_name = 'koine_greek_games/about.html'
