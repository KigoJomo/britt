import os
import json

# Load the JSON data
with open('projects.json', 'r') as f:
    projects = json.load(f)

# Directory containing the images
image_dir = './images'  # Update this path as necessary

# List of all image files in the directory
image_files = sorted([f for f in os.listdir(image_dir) if os.path.isfile(os.path.join(image_dir, f))])

# Ensure there are enough images
if len(image_files) < len(projects) * 2:
    raise ValueError("Not enough images in the directory to match the JSON data")

# Counter to track the current image file
image_counter = 0

# Rename images based on JSON data
for project in projects:
    for image_name in project['images']:
        # Construct the old and new file paths
        old_file = os.path.join(image_dir, image_files[image_counter])
        new_file = os.path.join(image_dir, image_name)

        # Rename the file
        os.rename(old_file, new_file)

        # Move to the next image
        image_counter += 1

print("Images renamed successfully.")
