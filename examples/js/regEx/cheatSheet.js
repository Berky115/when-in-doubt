/*


With each regular expression, we can associate five flags: i makes the regex case-insensitive, g matches all instances of the pattern, m allows matches across multiple lines, y enables sticky matching, while u enables the use of Unicode escapes. Flags are added at the end of a regex literal: /test/ig, or as a second parameter to the RegExp constructor: new RegExp("test", "i").
Use [] (as in [abc]) to specify a set of characters that we wish to match.
Use ^ to signify that the pattern must appear at the beginning of a string and $ to signify that the pattern must appear at the end of a string.
Use ? to specify that a term is optional, + that a term should appear one or many times, and * to specify that a term appears zero, one, or many times.
Use . to match any character.
We can use backslash (\) to escape special regex characters (such as . [ $ ^).
Use parentheses () to group multiple terms together, and pipe (|) to specify alternation.
Portions of a string that are successfully matched against terms can be back referenced with a backslash followed by the number of the capture (\1, \2, and so on).
Every string has access to the match function, which takes in a regular expression and returns an array containing the entire matched string along with any matched captures. We can also use the replace function, which causes a replacement on pattern matches rather than on a fixed string.



\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline

*/