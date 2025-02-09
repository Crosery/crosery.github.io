from PIL import Image
import os

def convert_to_webp(source):
    """Convert image to webp format"""
    destination = os.path.splitext(source)[0] + '.webp'
    
    image = Image.open(source)
    image.save(destination, format='webp', quality=80)  # 80%的质量是个不错的平衡点
    
    # 显示转换信息
    source_size = os.path.getsize(source) / 1024  # KB
    webp_size = os.path.getsize(destination) / 1024  # KB
    reduction = (source_size - webp_size) / source_size * 100
    
    print(f'{source}:')
    print(f'原始大小: {source_size:.2f}KB')
    print(f'转换后: {webp_size:.2f}KB')
    print(f'减少: {reduction:.2f}%\n')

def main():
    # 获取当前目录下所有jpg文件
    jpg_files = [f for f in os.listdir('.') if f.endswith('.jpg')]
    
    print(f'找到 {len(jpg_files)} 个jpg文件\n')
    
    # 转换每个文件
    for jpg_file in jpg_files:
        convert_to_webp(jpg_file)
        
    print('所有文件转换完成！')

if __name__ == '__main__':
    main()