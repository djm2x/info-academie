using System;
using System.Collections.Generic;
namespace Models
{
public partial class Question 
{public int Id { get; set; }
public string Value { get; set; }
public string Responses { get; set; }
public string Choices { get; set; }
public bool IsMultiChoises { get; set; }
public int Time { get; set; }
public int IdQuiz { get; set; }
public virtual Quiz Quiz { get; set; }
}
}
