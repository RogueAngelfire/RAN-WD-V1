from django.contrib import admin
from .models import (
    Programmer,
    Qualification,
    Experty,
    Project,
    )


class ProgrammerAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )

class ExpertyAdmin(admin.ModelAdmin):
    list_display = (
        'programmer',
        'language',
        'level'
    )

class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'programmer',
        'title',
        
    )

class QualificationAdmin(admin.ModelAdmin):
    list_display = (
        'programmer',
        'title',
        'level'
        
    )


admin.site.register(Programmer, ProgrammerAdmin)
admin.site.register(Qualification, QualificationAdmin)
admin.site.register(Experty, ExpertyAdmin)
admin.site.register(Project, ProjectAdmin)
