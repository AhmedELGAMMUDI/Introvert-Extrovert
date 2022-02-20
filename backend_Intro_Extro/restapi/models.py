from django.db import models


class Answer(models.Model):
    answer = models.CharField(max_length=120)
    answer_type = models.CharField(max_length=120)

    def _str_(self):
        return self.answer

class QuestionAnswer(models.Model):
    question = models.CharField(max_length=120)
    answers = models.ManyToManyField(Answer)

    def _str_(self):
        return self.question


