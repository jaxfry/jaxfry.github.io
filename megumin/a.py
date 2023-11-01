import os

# Specify the directory path
directory_path = "/Users/jaxonite/Documents/Anime/a"

# List all files in the directory
file_list = os.listdir(directory_path)

# Filter out directories (if any) and keep only files
file_list = [file for file in file_list if os.path.isfile(os.path.join(directory_path, file))]

# Convert the list of file names into a JavaScript array format
js_array = "[" + ", ".join([f"'{file}'" for file in file_list]) + "]"

# Print the JavaScript array
print(js_array)
