﻿using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CodePulse.API.Model.Domain
{
    public class Category
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string UrlHandle { get; set; }
        public ICollection<BlogPost> BlogPost { get; set; }
    }
}
