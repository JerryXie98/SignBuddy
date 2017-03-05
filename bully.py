import indicoio
from indicoio.custom import Collection
# Setup api key
indicoio.config.api_key = '374bf56d40dc09b94bc1951b0454b3a9'

# Setup custom collection
collection = Collection("collection_name")


# Sets harassment label to quote: You are very ugly
collection.add_data(["You are very ugly", "harassment"])

# Training
collection.train()

# Telling Collection to block until ready
collection.wait()

# Analyze text afterwords
collection.predict("https://thumb1.shutterstock.com/display_pic_with_logo/1327822/191076707/stock-photo-thank-you-sign-language-nonverbal-191076707.jpg")
