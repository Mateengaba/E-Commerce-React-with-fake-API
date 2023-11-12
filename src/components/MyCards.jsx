import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'


export function CardDefault(props) {
  let {title,image,description,rate,price}=props;

  // console.log(props.title,"title")
  // console.log(image)
  
  return (
    <Card className="mb-2 flex gap-3 w-72 mt-6 border-8 hover:static hover:scale-105">
      <CardHeader shadow={false} floated={false} color="blue-gray" className="relative h-64">
        <img
          src={image}
          alt="card-image"
          className="w-[100%] h-[100%]"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          <span className="line-clamp-1">{title}</span>
           <span className="font-bold text-xs">
                Price:{price}$
                <hr/>
            </span>          </Typography>
          <Typography color="blue-gray" className="font-medium">
          </Typography>
          
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 line-clamp-3"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
        <div><FontAwesomeIcon icon={faStar} className=" text-yellow-500 "/>{rate} {rate}K</div>

      </CardFooter>

    </Card>
    
  );


}